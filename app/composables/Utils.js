export const useUtils = () => {
  const getCategoryColor = (category) => {
    const colors = {
      sociale: "bg-primary text-white",
      cultura: "bg-blue-500 text-white",
      sostenibilità: "bg-purple-500 text-white",
      economia: "bg-gray-500 text-white",
    };
    return colors[category.toLowerCase()] || "bg-gray-400 text-white";
  };
  const getCleanedImageUrl = (imageUrl) => {
    if (!imageUrl) return getDefaultImage("bandi");
    const publicIndex = imageUrl.indexOf("/public");
    if (publicIndex === -1) return imageUrl;
    return imageUrl.slice(publicIndex + 7);
  };
  const getDefaultImage = (category) => {
    // const images = {
    //   Bandi: "/images/logo_copagri_og.png",
    //   Formazione: "/images/logo_copagri_og.png",
    //   Eventi: "/images/logo_copagri_og.png",
    //   Normative: "/images/logo_copagri_og.png",
    //   Notizie: "/images/logo_copagri_og.png",
    // };
    // return images[category] || images["Notizie"];
    return "/images/logo_copagri_og.png";
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };
  return {
    getCategoryColor,
    getCleanedImageUrl,
    getDefaultImage,
    formatDate,
  };
};
