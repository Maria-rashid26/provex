import React from "react";

const SecondDashboard = () => {
  // Your records data
  const records = [
    {
      id: 1,
      name: "CONTEMPORARY HOME",
      title: "House 1",
      Price: "£$500,000 - £$12,49,600 +£$150 (+0.32%)/sqft",
      imageUrl:
        "https://media.istockphoto.com/id/1481867504/photo/love-new-house-and-family-in-their-backyard-together-looking-at-their-property-or-luxury-real.jpg?s=1024x1024&w=is&k=20&c=fBAMmvO4zoaYLsaL3e1EDvPEBzqE6t0bp9LyPCiPmHU=",
    },
    {
      id: 2,
      name: "MODERN HOME",
      title: "House 2",
      Price: "£$300,000 - £$1,500,000 +£$225 (+0.40%)/sqft",
      imageUrl:
        "https://media.istockphoto.com/id/1458002636/photo/construction-workers-in-building-site.webp?b=1&s=170667a&w=0&k=20&c=bVXoqVu6PevF_G3WXSzCadinPg1Zu6NIfkfSDL0Cfs0=",
    },

    {
      id: 4,
      name: "RANCH HOME",
      title: "House 3",
      Price: "£$300,000 - £$1,500,000 +£$225 (+0.40%)/sqft",
      imageUrl:
        "https://media.istockphoto.com/id/1458002636/photo/construction-workers-in-building-site.webp?b=1&s=170667a&w=0&k=20&c=bVXoqVu6PevF_G3WXSzCadinPg1Zu6NIfkfSDL0Cfs0=",
    },
  ];

  return (
    <div>
      <h1 className="text-center">Data</h1>
      <div className="w-full grid grid-cols-3 gap-6 justify-around ">
        {/* Map over the records array and render information for each record */}
        {records.map((record) => (
          <div className="border-2 border-black w-[300px] text-white min-h-[350px] text-center bg-teal-900">
            <div
              key={record.id}
              className="w-[297px] h-[200px]  text-center items-center py-5 space-y-7 mb-3"
              style={{
                backgroundImage: `url(${record.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <h3 className="font-bold">{record.name}</h3>
            <h2>{record.title}</h2>
            <p className="font-semibold text-sm">Price: ${record.Price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondDashboard;
