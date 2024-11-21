import AdminNav from "./_components/AdminNav"

export const metadata = {
  title: 'Blog | Admin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AdminNav />
        {children}
      </body>
    </html>
  )
}
