import PoemCard from "./PoemCard";

const poems = [
  {
    id: 1,
    title: "For You",
    content:
      "Some days I don’t say much,\nbut my heart is always speaking to you.",
    date: "April 5",
  },
  {
    id: 2,
    title: "Quiet Love",
    content:
      "Not loud,\nnot rushed,\njust us,\nchoosing each other every day.",
    date: "April 12",
  },
];

const PoemsList = () => {
  return (
    <div className="space-y-6">
      {poems.map((poem) => (
        <PoemCard key={poem.id} poem={poem} />
      ))}
    </div>
  );
};

export default PoemsList;
