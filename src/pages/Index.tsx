
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PromptCard } from "@/components/PromptCard";
import { Image, Video } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [imagePrompt, setImagePrompt] = useState<string>("");
  const [videoPrompt, setVideoPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const generatePrompt = async (prompt: string, type: "image" | "video") => {
    setIsLoading(true);
    try {
      // Mock API call - replace with actual API integration
      await new Promise(resolve => setTimeout(resolve, 1500));
      const generated = `Enhanced ${type} prompt: ${prompt} + additional style elements`;
      
      if (type === "image") {
        setImagePrompt(generated);
      } else {
        setVideoPrompt(generated);
      }
      
      toast.success("Prompt generated successfully!");
    } catch (error) {
      toast.error("Failed to generate prompt. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl space-y-8 text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          AI Prompt Generator
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Transform your ideas into powerful prompts for image and video generation
        </p>
      </div>

      <Tabs defaultValue="image" className="w-full max-w-4xl">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="image" className="flex items-center gap-2">
            <Image className="h-4 w-4" />
            Text to Image
          </TabsTrigger>
          <TabsTrigger value="video" className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            Text to Video
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="image" className="space-y-4">
          <PromptCard
            title="Generate Image Prompt"
            description="Enter your idea and we'll enhance it for optimal image generation results."
            onSubmit={(prompt) => generatePrompt(prompt, "image")}
            isLoading={isLoading}
            generatedPrompt={imagePrompt}
          />
        </TabsContent>
        
        <TabsContent value="video" className="space-y-4">
          <PromptCard
            title="Generate Video Prompt"
            description="Enter your concept and we'll create an optimized prompt for video generation."
            onSubmit={(prompt) => generatePrompt(prompt, "video")}
            isLoading={isLoading}
            generatedPrompt={videoPrompt}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
