export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  viewCount?: string;
}

export async function getVideos(): Promise<Video[]> {
  const videos = await fetchVideos();
  return videos.map((v: any) => ({
    id: v.id,
    title: v.title,
    thumbnail: v.thumbnail,
    publishedAt: v.published,
  }));
}

export async function fetchVideos(): Promise<any[]> {
  const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

  if (!channelId) {
    console.warn('YouTube Channel ID is not set in .env.local. Skipping video fetch.');
    return [];
  }

  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`);
    const xml = await res.text();
    
    // Simple XML parsing without external library
    const videos: any[] = [];
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    let match;
    
    while ((match = entryRegex.exec(xml)) !== null) {
      const entry = match[1];
      const videoIdMatch = /<yt:videoId>(.*?)<\/yt:videoId>/.exec(entry);
      const titleMatch = /<title>(.*?)<\/title>/.exec(entry);
      const publishedMatch = /<published>(.*?)<\/published>/.exec(entry);
      
      if (videoIdMatch && titleMatch) {
        const videoId = videoIdMatch[1];
        videos.push({
          id: videoId,
          title: titleMatch[1],
          thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          published: publishedMatch ? publishedMatch[1] : new Date().toISOString(),
        });
      }
    }
    
    return videos;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
}
