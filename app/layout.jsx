import './globals.css'

    export const metadata = {
      title: 'Lexinum: The Number Translator',
      description: 'Convert numbers to words and words to numbers effortlessly.',
    }

    export default function RootLayout({ children }) {
      return (
        <html lang="en">
          <body>{children}</body>
        </html>
      )
    }
