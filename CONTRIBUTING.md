### MUI/STYLING

- Prefer MUI component props over custom CSS when possible.
- Use `sx` for component-specific styling.
- Prefer theme values over hardcoded values.
- For spacing, use numeric MUI values instead of spacing tokens when appropriate.
- Use responsive values for supported breakpoints.
- Reuse existing layout components where applicable.
- Prefer extending or updating existing components over creating duplicate components.

### Layout Components

- Use `PageLayout` for page-level vertical layout.
- Use `SectionContainer` for section content and horizontal spacing.

## Pull Requests

Before opening a PR, make sure:

- The code follows project conventions.
- The UI matches the Figma design.
- Responsive behavior is checked.
- Lint passes.
- There are no unnecessary changes.
- The PR description explains what was changed.
