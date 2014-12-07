#!/bin/sh

mkdir -p output

echo "===========拷贝css======>>>"
cp -rf css output/css/
echo "===========拷贝js======>>>"
cp -rf js output/js/
echo "===========拷贝image======>>>"
cp -rf image output/image/
echo "===========拷贝html======>>>"
cp -rf index.html output/index.html