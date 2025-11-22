export function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-slate-200">
      <div className="py-4  px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex lg:flex-1">
              <span className="sr-only">Orion</span>
              <img alt="logo" src="/logo.png" className="h-6 w-auto" />
            </div>

            <span className="font-bold text-lg">Orion</span>
          </div>
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Orion Payments. All rights reserved.
          </div>
          <div className="flex gap-6 text-slate-500">
            <a
              href="https://x.com/orion_ke_nse"
              className="hover:text-primary transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/orion-ke"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
