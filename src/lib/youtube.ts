const { xml2js } = require('xml-js');

export async function fetchVideos(): Promise<any[]> {
  const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

  if (!channelId) {
    console.warn('YouTube Channel ID is not set in .env.local. Skipping video fetch.');
    return [];
  }

  const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`);
  const xml = await res.text();
  // Simple XML to JSON conversion (placeholder)
  const result = xml2js(xml, { compact: true, ignoreDeclaration: true }) as any;
  // Extract entries
  const entries = result.feed?.entry ?? [];
  // Normalize to array
  const videos = Array.isArray(entries) ? entries : [entries];
  return videos.map((v: any) => ({
    id: v['yt:videoId']?._text,
    title: v.title._text,
    thumbnail: `https://i.ytimg.com/vi/${v['yt:videoId']?._text}/hqdefault.jpg`,
    published: v.published._text,
  }));
}
