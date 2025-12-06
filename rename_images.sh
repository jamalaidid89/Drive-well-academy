#!/bin/bash
# Image Renaming Helper Script for Drive-Well Academy
# This script helps rename your uploaded images to match website requirements

cd /Users/jamalaidid/Downloads/files/images

echo "📸 Image Renaming Helper"
echo "========================"
echo ""
echo "Your current images:"
ls -1 *.jpeg *.JPEG *.PNG *.png 2>/dev/null | head -10
echo ""
echo "⚠️  IMPORTANT: The website needs these exact names:"
echo "   1. automatic-car.jpg"
echo "   2. manual-car.jpg"
echo "   3. instructor-photo.jpg"
echo "   4. student-l-plates.jpg"
echo "   5. driving-lessons-bristol-graphic.jpg"
echo "   6. dvsa-training.jpg"
echo ""
echo "📝 To rename your images:"
echo "   1. Look at your images and decide which ones to use"
echo "   2. Manually rename them OR use this script"
echo ""
echo "Example commands to rename:"
echo "   mv IMG_0424.jpeg automatic-car.jpg"
echo "   mv IMG_0551.jpeg manual-car.jpg"
echo "   mv IMG_0579.jpeg instructor-photo.jpg"
echo ""
echo "💡 TIP: Your images are large (4-9MB). Consider optimizing them first!"
echo "   Use: https://tinypng.com or https://squoosh.app"


