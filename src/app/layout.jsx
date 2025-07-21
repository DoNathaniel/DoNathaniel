import "./globals.css";

export const metadata = {
  title: "Nathaniel",
  description: "I'm Nathaniel, a full stack developer and Computer Engineering student passionate about building innovative and functional solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script src="https://kit.fontawesome.com/6e9d785772.js" crossorigin="anonymous"></script>
      </head>
      <body className={`bg-custom flex flex-col items-center`}>
        {children}
      </body>
    </html>
  );
}
