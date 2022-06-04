import { TypographyStylesProvider } from '@mantine/core';

export default function Typography({innerHTML}) {
  return (
    <TypographyStylesProvider>
      <div dangerouslySetInnerHTML={{ __html: innerHTML }} />
    </TypographyStylesProvider>
  );
}