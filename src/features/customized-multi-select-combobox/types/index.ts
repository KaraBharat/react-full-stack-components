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
