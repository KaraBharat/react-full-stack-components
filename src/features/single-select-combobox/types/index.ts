export type UserProfile = {
  id: string;
  name: string;
  avatar: string;
};

export type Language = {
  id: string;
  name: string;
  displayName?: string;
  flagUrl: string;
};

export type TimeZone = {
  id: string;
  name: string;
  offset: number;
  abbreviation: string;
  gmt: string;
  dst: boolean;
};

export type OptionType = {
  label: string;
  value: string;
};
