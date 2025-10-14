export const useUtils = () => {
  const getCategoryColor = (category) => {
    const colors = {
      bandi: "bg-primary text-white",
      formazione: "bg-blue-500 text-white",
      eventi: "bg-purple-500 text-white",
      normative: "bg-orange-500 text-white",
      notizie: "bg-gray-500 text-white",
    };
    return colors[category.toLowerCase()] || "bg-gray-400 text-white";
  };
  const getDefaultImage = (category) => {
    const images = {
      Bandi:
        "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      Formazione:
        "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      Eventi:
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      Normative:
        "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      Notizie:
        "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    };
    return images[category] || images["Notizie"];
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
    getDefaultImage,
    formatDate,
  };
};
