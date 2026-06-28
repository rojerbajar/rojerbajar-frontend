import * as htmlToImage from 'html-to-image';

export const useShareCard = () => {
  const shareCard = async (elementId) => {
    const node = document.getElementById(elementId);
    if (!node) return;

    const originalStyle = node.style.width;
    node.style.width = '600px';

    try {
      const dataUrl = await htmlToImage.toPng(node, {
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor: '#ffffff',
      });

      node.style.width = originalStyle;

      const response = await fetch(dataUrl);
      const blob = await response.blob();
      
      // এখানে ফাইলটির নাম হিসেবে elementId ব্যবহার করা হয়েছে
      const fileName = `${elementId}.png`; 
      const file = new File([blob], fileName, { type: 'image/png' });

      if (navigator.share && navigator.canShare({ files: [file] })) {
        await navigator.share({ 
          files: [file],
          title: 'Share Card',
          text: 'এখানে আমার কার্ডটি দেখুন'
        });
      } else {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = fileName; // ডাউনলোডের সময়ও একই নাম থাকবে
        link.click();
      }
    } catch (error) {
      node.style.width = originalStyle;
      console.error('ছবি তৈরিতে সমস্যা:', error);
    }
  };

  return { shareCard };
};