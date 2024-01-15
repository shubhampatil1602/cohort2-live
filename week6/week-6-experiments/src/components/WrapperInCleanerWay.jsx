const WrapperInCleanerWay = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt
        ducimus
      </Card>
      <Card>
        {' '}
        doloremque similique accusantium facere explicabo voluptas magni
        officiis adipisci asperiores sint possimus quos odit porro,jbmbmn
      </Card>
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt
        ducimus vitae dolorem recusandae cum, eveniet nulla illum modi similique
        architecto. Delectus totam placeat esse expedita, beatae est dolorum
        commodi doloremque similique accusantium facere explicabo voluptas magni
        officiis adipisci asperiores sint possimus quos odit porro, iure
        corporis! Eveniet inventore quis vero. Labore optio harum, atque fuga
        aliquid, hic vitae asperiores quae maxime totam similique iste ut
        sapiente! Ipsum eligendi praesentium nesciunt natus nostrum, dignissimos
        commodi, voluptatibus repellat soluta autem non accusamus illum odio
        delectus consequatur totam quam cupiditate hic porro? Illum distinctio
        nostrum iste, nisi vero illo eaque sequi sunt.
      </Card>
    </div>
  );
};

function Card({ children }) {
  return (
    <div style={{ border: '2px solid', margin: '10px', padding: '10px' }}>
      {children}
    </div>
  );
}

export default WrapperInCleanerWay;
