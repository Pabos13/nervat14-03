import shutil
import os

base_path = "/vercel/share/v0-project/vatfaktura-c7a45c8a2200785484da20952245014d9a5595d8"
source_path = os.path.join(base_path, "vatfaktura")
dest_path = base_path

# Folders to copy
folders_to_copy = ["app", "components", "contexts", "hooks", "lib", "styles", "public"]

for folder in folders_to_copy:
    src = os.path.join(source_path, folder)
    dst = os.path.join(dest_path, folder)
    
    if os.path.exists(src):
        if os.path.exists(dst):
            # Merge directories
            for item in os.listdir(src):
                s = os.path.join(src, item)
                d = os.path.join(dst, item)
                if os.path.isdir(s):
                    if os.path.exists(d):
                        shutil.rmtree(d)
                    shutil.copytree(s, d)
                else:
                    shutil.copy2(s, d)
            print(f"Merged {folder}")
        else:
            shutil.copytree(src, dst)
            print(f"Copied {folder}")
    else:
        print(f"Source not found: {folder}")

# Copy individual files
files_to_copy = ["next-env.d.ts"]
for file in files_to_copy:
    src = os.path.join(source_path, file)
    dst = os.path.join(dest_path, file)
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f"Copied {file}")

print("Migration complete!")
