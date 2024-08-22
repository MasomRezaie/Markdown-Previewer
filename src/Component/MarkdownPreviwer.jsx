import React from 'react'

const initialMarkdown = `# Heading
## Sub-heading
[Link](https://example.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**
\nNew line here after two spaces at the end of this line.`;

function MarkdownPreviwer() {
    const [markdown, setMarkdown] = useState(initialMarkdown);

  return (
   <>
   
   </>
  )
}

export default MarkdownPreviwer
