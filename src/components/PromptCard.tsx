
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

interface PromptCardProps {
  title: string;
  description: string;
  onSubmit: (prompt: string) => void;
  isLoading?: boolean;
  generatedPrompt?: string;
}

export const PromptCard: React.FC<PromptCardProps> = ({
  title,
  description,
  onSubmit,
  isLoading = false,
  generatedPrompt,
}) => {
  const [prompt, setPrompt] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(prompt);
  };

  return (
    <Card className="w-full max-w-2xl glass-card page-transition">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Enter your prompt here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[100px] resize-none"
          />
          {generatedPrompt && (
            <div className="mt-4 p-4 rounded-lg bg-accent/5 border border-accent/20">
              <h3 className="text-sm font-medium mb-2">Generated Prompt:</h3>
              <p className="text-sm text-muted-foreground">{generatedPrompt}</p>
            </div>
          )}
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button 
          type="submit" 
          disabled={isLoading || !prompt} 
          onClick={handleSubmit}
          className="bg-accent hover:bg-accent-light transition-colors"
        >
          {isLoading ? "Generating..." : "Generate"}
          {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </CardFooter>
    </Card>
  );
};
