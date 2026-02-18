const NavBar = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo or Brand Name */}
          <a href="#home" className="flex items-center gap-3 group">
            Mzi Welanga
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-inter text-muted-foreground hover:text-primary transition-colors duration-300 text-sm uppercase tracking-wider hover:text-"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="cyber-button px-6 py-2.5 rounded-lg font-orbitron text-sm font-semibold text-primary-foreground"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
