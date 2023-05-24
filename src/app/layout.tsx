import './globals.css'
import {ReactNode} from "react";

const RootLayout = ({children}: { children:ReactNode}) => {
  return (
    <html lang="en">
        <title>VK</title>
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout

