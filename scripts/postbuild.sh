for path in $(find src -name templates)
do
  new_path=${path/src/generators}

  mkdir -p $new_path
  cp -r $path/ $new_path
done