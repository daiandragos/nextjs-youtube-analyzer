export type Video = {
  id: string;
  title: string;
  description: string;
  snippet: {
    publishedAt: Date;
    title: string;
  };
  contentDetails: {
    videoId: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    commentCount: string;
  };
};

export type Stat = {
  title: string;
  value: string;
  icon: React.ReactNode;
};

export type Channel = {
  brandingSettings: {
    channel: {
      country?: string;
      title: string;
    };
    image: {
      bannerExternalUrl?: string;
    };
  };
  contentDetails: {
    relatedPlaylists: {
      uploads: string;
    };
  };
  snippet: {
    title: string;
    publishedAt: Date;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: any;
    subscriberCount: any;
    videoCount: any;
  };
};
