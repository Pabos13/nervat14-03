import shutil
import os

# Source and destination paths
src_base = "/vercel/share/v0-project/vatfaktura-c7a45c8a2200785484da20952245014d9a5595d8/vatfaktura"
dst_base = "/vercel/share/v0-project/vatfaktura-c7a45c8a2200785484da20952245014d9a5595d8"

# Folders to move
folders = ["app", "components", "contexts", "hooks", "lib", "public"]

for folder in folders:
    src = os.path.join(src_base, folder)
    dst = os.path.join(dst_base, folder)
    
    print(f"Checking {src}...")
    
    if os.path.exists(src):
        if os.path.exists(dst):
            print(f"  Destination exists, removing: {dst}")
            shutil.rmtree(dst)
        
        print(f"  Copying {src} to {dst}")
        shutil.copytree(src, dst)
        print(f"  Done: {folder}")
    else:
        print(f"  Source not found: {src}")

# Copy individual files
files = ["next-env.d.ts"]
for f in files:
    src = os.path.join(src_base, f)
    dst = os.path.join(dst_base, f)
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f"Copied file: {f}")

print("\nMigration complete!")
