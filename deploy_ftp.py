from pathlib import Path
from ftplib import FTP, FTP_TLS, error_perm

HOST = 'ftp.thalassashoreservicesgh.com'
USER = 'angmorteyfelix@thalassashoreservicesgh.com'
PASS = 'N11p@ssword694945'
LOCAL_ROOT = Path('build')

if not LOCAL_ROOT.exists() or not LOCAL_ROOT.is_dir():
    raise SystemExit(f'Local build folder not found: {LOCAL_ROOT}')

print(f'Connecting to {HOST}')
ftp = None
try:
    ftp = FTP_TLS(timeout=30)
    ftp.connect(HOST, 21)
    ftp.login(USER, PASS)
    ftp.prot_p()
    print('Connected via explicit FTPS')
except Exception as first_exc:
    print(f'Explicit FTPS failed: {first_exc}')
    if ftp:
        try:
            ftp.close()
        except Exception:
            pass
    ftp = FTP(timeout=30)
    ftp.connect(HOST, 21)
    ftp.login(USER, PASS)
    print('Connected via plain FTP')

remote_root = ftp.pwd()
print('Remote root:', remote_root)


def ensure_dir(path):
    ftp.cwd(remote_root)
    if not path:
        return
    for part in path.split('/'):
        if not part:
            continue
        try:
            ftp.cwd(part)
        except error_perm:
            try:
                ftp.mkd(part)
                print(f'Created remote directory: {part}')
                ftp.cwd(part)
            except Exception as exc:
                raise


def upload_folder(local_folder: Path):
    rel_folder = local_folder.relative_to(LOCAL_ROOT).as_posix()
    if rel_folder == '.':
        rel_folder = ''
    if rel_folder:
        ensure_dir(rel_folder)
    else:
        ftp.cwd(remote_root)
    for local_path in sorted(local_folder.iterdir()):
        if local_path.is_dir():
            upload_folder(local_path)
            ftp.cwd(remote_root)
        elif local_path.is_file():
            remote_name = local_path.name
            print(f'Uploading {local_path} -> {rel_folder}/{remote_name}')
            with local_path.open('rb') as fp:
                ftp.storbinary(f'STOR {remote_name}', fp)

upload_folder(LOCAL_ROOT)
ftp.cwd(remote_root)
print('Remote listing after upload:')
for item in ftp.nlst():
    print(' -', item)
ftp.quit()
print('Deployment complete.')
