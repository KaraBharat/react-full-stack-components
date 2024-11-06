/**
 * User Profile Type
 *
 * Represents a user's basic profile information.
 *
 * @example
 * const user: UserProfile = {
 *   id: "user123",
 *   name: "John Doe",
 *   avatar: "https://example.com/avatar.jpg"
 * };
 */
export type UserProfile = {
  /** Unique identifier for the user */
  id: string;
  /** User's full name */
  name: string;
  /** URL to user's avatar image */
  avatar: string;
};

/**
 * Language Type
 *
 * Represents a language option with its associated properties.
 *
 * @example
 * const language: Language = {
 *   id: "en-US",
 *   name: "English",
 *   displayName: "English (United States)",
 *   flagUrl: "https://example.com/flags/us.svg"
 * };
 */
export type Language = {
  /** Unique identifier for the language (typically language code) */
  id: string;
  /** Base name of the language */
  name: string;
  /** Optional display name with region/variant information */
  displayName?: string;
  /** URL to the country flag image associated with the language */
  flagUrl: string;
};

/**
 * Time Zone Type
 *
 * Represents a time zone with its properties and offset information.
 *
 * @example
 * const timeZone: TimeZone = {
 *   id: "America/New_York",
 *   name: "Eastern Time",
 *   offset: -5,
 *   abbreviation: "EST",
 *   gmt: "GMT-5",
 *   dst: true
 * };
 */
export type TimeZone = {
  /** Unique identifier for the time zone (IANA time zone ID) */
  id: string;
  /** Human-readable name of the time zone */
  name: string;
  /** UTC offset in hours */
  offset: number;
  /** Standard abbreviation (e.g., EST, PST) */
  abbreviation: string;
  /** GMT representation (e.g., GMT-5) */
  gmt: string;
  /** Indicates if the time zone observes Daylight Saving Time */
  dst: boolean;
};

/**
 * Option Type
 *
 * Generic option type for select/combobox components.
 * Used for simple key-value pair options.
 *
 * @example
 * const option: OptionType = {
 *   label: "Display Text",
 *   value: "option_value"
 * };
 *
 * @example Usage in a component
 * const options: OptionType[] = [
 *   { label: "Option 1", value: "1" },
 *   { label: "Option 2", value: "2" }
 * ];
 *
 * <Select options={options} />
 */
export type OptionType = {
  /** Display text for the option */
  label: string;
  /** Underlying value for the option */
  value: string;
};
