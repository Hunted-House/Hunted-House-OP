
export default function ConceptDetail({params}) {
    console.log(params);
    return (
      <main>
        <div className="flex flex-col items-center justify-between p-24">
          <h1 className='text-center text-4xl'>This is the concept detail page of {params.id}</h1>
        </div>
      </main>
    );
  }
  