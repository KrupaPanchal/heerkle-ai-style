import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload, Sparkles } from 'lucide-react';
import { colorPalettes } from '@/data/products';
import { SkinTone } from '@/types/product';
import { Link } from 'react-router-dom';

const AIScan = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analyzedTone, setAnalyzedTone] = useState<SkinTone | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        // Simulate AI analysis
        setTimeout(() => {
          const tones: SkinTone[] = ['fair', 'medium', 'deep'];
          const randomTone = tones[Math.floor(Math.random() * tones.length)];
          setAnalyzedTone(randomTone);
        }, 1500);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetScan = () => {
    setSelectedImage(null);
    setAnalyzedTone(null);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">AI Skin Tone Analysis</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload your photo and discover which colors complement your natural skin tone perfectly.
            Our AI will analyze your complexion and recommend your ideal color palette.
          </p>
        </div>

        <Card className="p-8">
          {!selectedImage ? (
            <div className="space-y-6">
              <div className="border-2 border-dashed border-border rounded-2xl p-12 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-foreground font-semibold mb-2">Upload your photo</p>
                  <p className="text-sm text-muted-foreground">
                    PNG, JPG up to 5MB
                  </p>
                </label>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">Tips for best results:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Use a clear, well-lit photo</li>
                  <li>Face the camera directly</li>
                  <li>Natural lighting works best</li>
                  <li>Remove filters or heavy makeup</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={selectedImage}
                    alt="Uploaded"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  {!analyzedTone ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center space-y-3">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
                        <p className="text-muted-foreground">Analyzing your skin tone...</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          Your Skin Tone: {colorPalettes[analyzedTone].name}
                        </h3>
                        <p className="text-muted-foreground">
                          Based on our AI analysis, these colors will look amazing on you!
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Recommended Colors</h4>
                        <div className="flex flex-wrap gap-3">
                          {colorPalettes[analyzedTone].colors.map((color) => (
                            <div key={color} className="text-center">
                              <div
                                className="w-16 h-16 rounded-full border-2 border-border shadow-md capitalize flex items-center justify-center text-xs font-medium"
                                style={{
                                  background: color === 'white' ? '#ffffff' :
                                           color === 'navy' ? '#1e3a8a' :
                                           color === 'emerald' ? '#059669' :
                                           color === 'maroon' ? '#7f1d1d' :
                                           color === 'rose' ? '#fb7185' :
                                           color === 'mustard' ? '#eab308' :
                                           color === 'teal' ? '#0d9488' :
                                           color === 'olive' ? '#65a30d' :
                                           color === 'charcoal' ? '#374151' : color,
                                  color: ['white', 'mustard', 'rose'].includes(color) ? '#000' : '#fff'
                                }}
                              >
                                {color}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 space-y-3">
                        <Button className="w-full" size="lg" asChild>
                          <Link to={`/shop`}>
                            <Sparkles className="mr-2 h-5 w-5" />
                            Shop Recommended Items
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full" onClick={resetScan}>
                          Try Another Photo
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default AIScan;
