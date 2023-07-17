import React from 'react'

const List = ({
  Items,
  selectedIndex,
  onClick,
}: {
  Items: React.ReactNode[]
  selectedIndex: number
  onClick: (index: number) => void
}) => {
  return (
    <div className="flex flex-col justify-center">
      {Items.map((item, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={`relative rounded-lg ${
            index === selectedIndex ? 'bg-transparent' : 'bg-bgDark'
          }`}
        >
          {index == selectedIndex ? (
            <>
              <div className="absolute w-full h-full rounded-lg -z-20 bg-lightBlack" />
              <div className="absolute h-full rounded-lg animate-carouselLoading -z-10 bg-lighterBlack" />
            </>
          ) : (
            ''
          )}
          {item}
        </button>
      ))}
    </div>
  )
}

export default List
