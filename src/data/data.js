const data = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "nested folder1",
      isFolder: true,
      items: [
        {
          name: "nested nested folder1",
          isFolder: true,
          items: [
            {
              name: "nested nested folder 1",
              isFolder: false
            }
          ]
        },
        {
          name: "nested nested folder 2",
          isFolder: false
        }
      ]
    },
    {
      name: "nested folder2",
      isFolder: false
    },
    {
      name: "nested folder3",
      isFolder: true,
      items: [
        {
          name: "src",
          isFolder: false
        }
      ]
    }
  ]
};

export default data;
