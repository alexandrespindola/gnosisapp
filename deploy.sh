#!/bin/bash
# deploy.sh

echo "🚀 Starting deployment process..."

# Generate chapters
echo "📚 Generating chapters..."
node --loader ts-node/esm generateChapters.ts

# If chapters generation was successful
if [ $? -eq 0 ]; then
    # Clean previous caches
    echo "🧹 Cleaning caches..."
    rm -rf dist
    rm -rf .astro

    # Make new build
    echo "🛠️ Building project..."
    pnpm build

    # If build was successful, deploy
    if [ $? -eq 0 ]; then
        echo "📤 Uploading to Netlify..."
        netlify deploy --prod --dir=dist
    else
        echo "❌ Build failed!"
        exit 1
    fi
else
    echo "❌ Chapter generation failed!"
    exit 1
fi

echo "✅ Deployment complete!"