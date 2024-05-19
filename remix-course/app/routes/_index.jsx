import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <main className="text-center text-primary-10">
      <h1 className="text-3xl font-bold">A better way of keeping track of your notes</h1>
      <p className="mt-4">Try our early beta and never lose track of your notes again!</p>
      <p id="cta" className="mt-8">
        <Link to="/notes" className="bg-secondary-100 text-primary-800 py-2 px-4 rounded hover:bg-secondary-200">
          Try Now!
        </Link>
      </p>
    </main>
  );
}
