import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import ThemeToggle from '../components/layout/ThemeToggle';

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-8">
      <ThemeToggle />
      <Badge>New</Badge>
      <Card className="w-80">
        <h2 className="font-semibold mb-3 dark:text-white">Test Card</h2>
        <Input label="Email" placeholder="you@example.com" className="mb-3" />
        <Button>Click me</Button>
      </Card>
    </div>
  );
}

export default LandingPage;