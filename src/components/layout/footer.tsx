import { footerData } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-background py-6 text-center text-muted-foreground"> {/* Changed background to bg-background */}
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-sm">{footerData.text}</p>
      </div>
    </footer>
  );
}
