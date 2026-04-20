import os

def replace_in_file(file_path, search_text, replace_text):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if search_text in content:
        new_content = content.replace(search_text, replace_text)
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Updated: {file_path}")

def walk_and_replace(directory, search_text, replace_text):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.tsx', '.ts')):
                file_path = os.path.join(root, file)
                replace_in_file(file_path, search_text, replace_text)

if __name__ == "__main__":
    src_dir = "src"
    walk_and_replace(src_dir, "@lib/lib/utils", "@lib/util/cn")
