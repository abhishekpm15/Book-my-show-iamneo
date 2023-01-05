import React from 'react'

const Movies2 = ({objects}) => {
  return (
        <div className="flex justify-between">
            {objects.map((object) => {
              console.log(object);
              return (
                <div className="">
                  <img
                    src={object?.link}
                    alt="images"
                    className="rounded-md"
                    width="210px"
                  />
                  <div className="pt-3 text-xl font-semibold">{object?.title}</div>
                  <div className="pt-1 text-md text-blue-gray-500">
                    {object?.content}
                  </div>
                </div>
              );
            })}
        </div>
    )
}

export default Movies2