import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  roomName?: string;
}

export function ImageLightbox({ images, currentIndex, onClose, roomName }: ImageLightboxProps) {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog.Root open={true} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/90 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full h-full md:h-[90vh] md:max-w-6xl translate-x-[-50%] translate-y-[-50%] flex flex-col focus:outline-none">
          {/* Accessible title and description for screen readers */}
          <VisuallyHidden.Root>
            <Dialog.Title>
              {roomName ? `${roomName} Photo Gallery` : 'Photo Gallery'}
            </Dialog.Title>
            <Dialog.Description>
              Viewing photo {activeIndex + 1} of {images.length}. Use arrow buttons or swipe to navigate between photos.
            </Dialog.Description>
          </VisuallyHidden.Root>

          {/* Close Button */}
          <Dialog.Close className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          {/* Image Container */}
          <div className="flex-1 flex items-center justify-center p-4 md:p-8">
            <img
              src={images[activeIndex]}
              alt={`Photo ${activeIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 md:p-3 text-white hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 md:p-3 text-white hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm md:text-base">
            {activeIndex + 1} / {images.length}
          </div>

          {/* Thumbnail Strip (Desktop Only) */}
          <div className="hidden md:block absolute bottom-16 left-1/2 -translate-x-1/2 max-w-4xl">
            <div className="flex gap-2 justify-center px-4 overflow-x-auto">
              {images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 transition-all ${
                    idx === activeIndex
                      ? 'border-[#f58220] scale-110'
                      : 'border-white/30 hover:border-white/60 opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`Go to photo ${idx + 1}`}
                >
                  <img
                    src={image}
                    alt={`thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}