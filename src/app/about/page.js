import ThemedBackground from "../../components/ThemedBackground";

export default function About() {
  return (
    <ThemedBackground>
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              About Us
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Content coming soon...
            </p>
          </div>
        </div>
      </div>
    </ThemedBackground>
  );
}