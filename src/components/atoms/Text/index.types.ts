type TextElement = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span';

export interface TextProps {
  children: string | string[],
  as: TextElement,
  className?: string,
}
