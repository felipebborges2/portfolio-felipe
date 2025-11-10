export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-p py-8 text-sm text-subtle">
        © {new Date().getFullYear()} Felipe Borges. All rights reserved.
      </div>
    </footer>
  );
}
