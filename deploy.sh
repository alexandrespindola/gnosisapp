#!/bin/bash
# deploy.sh

# Record start time
START_TIME=$(date +%s)
echo "⏱️ Deployment started: $(date '+%Y-%m-%d %H:%M:%S')"
echo "🚀 Starting deployment process..."

# Generate books
echo "📚 Generating books..."
# npx tsx scripts/generateBooks.ts

# Generate chapters
echo "📚 Generating chapters..."
npx tsx scripts/generateChapters.ts

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

# Record end time
END_TIME=$(date +%s)
DURATION=$((END_TIME - START_TIME))

# Calculate hours, minutes and seconds
HOURS=$((DURATION / 3600))
MINUTES=$(( (DURATION % 3600) / 60 ))
SECONDS=$((DURATION % 60))

echo "✅ Deployment complete!"
echo "⏱️ Deployment finished: $(date '+%Y-%m-%d %H:%M:%S')"
echo "⏱️ Total time: ${HOURS}h ${MINUTES}m ${SECONDS}s"