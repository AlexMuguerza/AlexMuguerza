export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 border-t border-border text-center">
      <p className="text-text text-wrap text-sm flex items-center justify-center gap-2 flex-wrap">
        © {currentYear} Elmer Alexis Muguerza Prieto. 
        <span className="text-border-light">•</span>
        <span>Make with ❤️</span>
      </p>
    </footer>
  )
}
