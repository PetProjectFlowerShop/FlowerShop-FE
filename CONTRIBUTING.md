### MUI/STYLING

- Prefer MUI component props over custom CSS when possible.
- Use `sx` for component-specific styling.
- Prefer theme values over hardcoded values.
- For spacing, use numeric MUI values instead of spacing tokens when appropriate.
- Use project-defined breakpoints (xs, tablet, desktop) when responsive styling is required.
- Use responsive values to keep the implementation consistent with the Figma design.
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

### Typography variants

When choosing a typography variant, check the design:

- **Mobile variant in design** → use the standard variant.

  - Design: `H4 Mobile` → `variant="h4"`

- **No `Mobile` suffix in design** → use the `Fixed` variant.

  - Design: `Body` → `variant="bodyFixed"`

**Rule:** `Mobile` → standard variant, everything else → `Fixed` variant.
