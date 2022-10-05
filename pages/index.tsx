import { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'

export async function getStaticProps(context) {

  const data = [
	{
		"zona" : "253 - Tatuapé",
		"suprefeitura" : "Aricanduva Formosa Carrão",
		"endereco" : "Rua Atucuri, 699 - Vila Carrão",
		"telefone" : "3396-0800"
	},
	{
		"zona" : "348 - Vila Formosa",
		"suprefeitura" : "Aricanduva Formosa Carrão",
		"endereco" : "Rua Atucuri, 699 - Vila Carrão",
		"telefone" : "3396-0800"
	},
	{
		"zona" : "346 - Butantã",
		"suprefeitura" : "Butantã",
		"endereco" : "Rua Ulpiano da Costa Manso, 201",
		"telefone" : "3397-4600"
	},
	{
		"zona" : "374 - Rio Pequeno",
		"suprefeitura" : "Butantã",
		"endereco" : "Rua Ulpiano da Costa Manso, 201",
		"telefone" : "3397-4600"
	},
	{
		"zona" : "020 - Valo Velho",
		"suprefeitura" : "Campo Limpo",
		"endereco" : "Rua Nossa Senhora do Bom Conselho, 59",
		"telefone" : "3397-0500"
	},
	{
		"zona" : "328 - Campo Limpo",
		"suprefeitura" : "Campo Limpo",
		"endereco" : "Rua Nossa Senhora do Bom Conselho, 59",
		"telefone" : "3397-0500"
	},
	{
		"zona" : "373 - Capão Redondo",
		"suprefeitura" : "Campo Limpo",
		"endereco" : "Rua Nossa Senhora do Bom Conselho, 59",
		"telefone" : "3397-0500"
	},
	{
		"zona" : "408 - Jd. São Luiz",
		"suprefeitura" : "Campo Limpo",
		"endereco" : "Rua Nossa Senhora do Bom Conselho, 59",
		"telefone" : "3397-0500"
	},
	{
		"zona" : "280 - Capela do Socorro",
		"suprefeitura" : "Capela do Socorro",
		"endereco" : "Rua Cassiano dos Santos, 499 Jardim Clipper",
		"telefone" : "3397-2700"
	},
	{
		"zona" : "371 - Grajaú",
		"suprefeitura" : "Capela do Socorro",
		"endereco" : "Rua Cassiano dos Santos, 499 Jardim Clipper",
		"telefone" : "3397-2700"
	},
	{
		"zona" : "255 - Casa Verde",
		"suprefeitura" : "Casa Verde",
		"endereco" : "Av. Ordem e Progresso, 1001 Ponte do Limão",
		"telefone" : "2813-3250"
	},
	{
		"zona" : "422 - Mandaqui",
		"suprefeitura" : "Casa Verde",
		"endereco" : "Av. Ordem e Progresso, 1001 Ponte do Limão",
		"telefone" : "2813-3250"
	},
	{
		"zona" : "351 - Cidade Ademar",
		"suprefeitura" : "Cidade Ademar",
		"endereco" : "Av. Yervant Kissajikian, 416 Vila Constância",
		"telefone" : "5670-7000"
	},
	{
		"zona" : "418 - Pedreira",
		"suprefeitura" : "Cidade Ademar",
		"endereco" : "Av. Yervant Kissajikian, 416 Vila Constância",
		"telefone" : "5670-7000"
	},
	{
		"zona" : "404 - Cidade Tiradentes",
		"suprefeitura" : "Cidade Tiradentes",
		"endereco" : "Rua Juá Mirim S/N Cidade Tiradentes",
		"telefone" : "3396-0003"
	},
	{
		"zona" : "326 - Ermelino Matarazzo",
		"suprefeitura" : "Ermelino Matarazzo",
		"endereco" : "Av. São Miguel, 5550",
		"telefone" : "2114-0333"
	},
	{
		"zona" : "392 - Ponte Rasa",
		"suprefeitura" : "Ermelino Matarazzo",
		"endereco" : "Av. São Miguel, 5550",
		"telefone" : "2114-0333"
	},
	{
		"zona" : "327 - Nossa Senhora do Ó",
		"suprefeitura" : "Freguesia do Ó Brasilândia",
		"endereco" : "Av. João Marcelino Branco, 95",
		"telefone" : "3981-5000"
	},
	{
		"zona" : "376 - Brasilândia",
		"suprefeitura" : "Freguesia do Ó Brasilândia",
		"endereco" : "Av. João Marcelino Branco, 95",
		"telefone" : "3981-5000"
	},
	{
		"zona" : "353 - Guaianazes",
		"suprefeitura" : "Guaianases",
		"endereco" : "Rua Hipólito de Camargo, 479, Vila Lourdes, Guaianases",
		"telefone" : "2557-7099"
	},
	{
		"zona" : "405 - José Bonifácio",
		"suprefeitura" : "Guaianases",
		"endereco" : "Rua Hipólito de Camargo, 479, Vila Lourdes, Guaianases",
		"telefone" : "2557-7099"
	},
	{
		"zona" : "260 - Ipiranga",
		"suprefeitura" : "Ipiranga",
		"endereco" : "Rua Lino Coutinho,  444",
		"telefone" : "2808-3600"
	},
	{
		"zona" : "413 - Cursino",
		"suprefeitura" : "Ipiranga",
		"endereco" : "Rua Lino Coutinho,  444",
		"telefone" : "2808-3600"
	},
	{
		"zona" : "352 - Itaim Paulista",
		"suprefeitura" : "Itaim Paulista",
		"endereco" : "Av Marechal Tito, 3012 Itaim Paulista",
		"telefone" : "2561-6064"
	},
	{
		"zona" : "397 - Jd. Helena",
		"suprefeitura" : "Itaim Paulista",
		"endereco" : "Av Marechal Tito, 3012 Itaim Paulista",
		"telefone" : "2561-6064"
	},
	{
		"zona" : "248 - Itaquera",
		"suprefeitura" : "Itaquera",
		"endereco" : "Rua Augusto Carlos Bauman, 851",
		"telefone" : "2944-6555"
	},
	{
		"zona" : "417 - Parque do Carmo",
		"suprefeitura" : "Itaquera",
		"endereco" : "Rua Augusto Carlos Bauman, 851",
		"telefone" : "2944-6555"
	},
	{
		"zona" : "320 - Jabaquara",
		"suprefeitura" : "Jabaquara",
		"endereco" : "Av. Eng. Armando Arruda Pereira, 2314",
		"telefone" : "3397-3200"
	},
	{
		"zona" : "256 -  Tucuruvi",
		"suprefeitura" : "Jaçanã Tremembé",
		"endereco" : "Av. Luis Stamatis, 300",
		"telefone" : "3397-1000"
	},
	{
		"zona" : "349 - Jaçanã",
		"suprefeitura" : "Jaçanã Tremembé",
		"endereco" : "Av. Luis Stamatis, 300",
		"telefone" : "3397-1000"
	},
	{
		"zona" : "250 - Lapa",
		"suprefeitura" : "Lapa",
		"endereco" : "Rua Guaicurus, 1000",
		"telefone" : "3396-7500"
	},
	{
		"zona" : "372 - Piraporinha",
		"suprefeitura" : "M'Boi Mirim",
		"endereco" : "Av. Guarapiranga, 1695 Parque Alves de Lima",
		"telefone" : "3396-8400"
	},
	{
		"zona" : "004 - Mooca",
		"suprefeitura" : "Moóca",
		"endereco" : "Rua Taquari, 549 - Moóca",
		"telefone" : "2292-2122"
	},
	{
		"zona" : "381 - Parelheiros",
		"suprefeitura" : "Parelheiros",
		"endereco" : "Estrada Ecoturística de Parelheiros, 5252 ",
		"telefone" : "5926-6500"
	},
	{
		"zona" : "252 - Penha",
		"suprefeitura" : "Penha",
		"endereco" : "Rua Candapuí, 492",
		"telefone" : "3397-5100"
	},
	{
		"zona" : "347 - Vila Matilde",
		"suprefeitura" : "Penha",
		"endereco" : "Rua Candapuí, 492",
		"telefone" : "3397-5100"
	},
	{
		"zona" : "390 - Cangaíba",
		"suprefeitura" : "Penha",
		"endereco" : "Rua Candapuí, 492",
		"telefone" : "3397-5100"
	},
	{
		"zona" : "389 - Perus",
		"suprefeitura" : "Perus",
		"endereco" : "Rua Ylidio Figueiredo, 349",
		"telefone" : "3396-8600"
	},
	{
		"zona" : "251 - Pinheiros",
		"suprefeitura" : "Pinheiros",
		"endereco" : "Av. Nações Unidas, 7123",
		"telefone" : "3095-9595"
	},
	{
		"zona" : "325 - Pirituba",
		"suprefeitura" : "Pirituba Jaraguá",
		"endereco" : "Rua Dr. Felipe Pinel, 12 - Pirituba",
		"telefone" : "3971-2620"
	},
	{
		"zona" : "403 - Jaraguá",
		"suprefeitura" : "Pirituba Jaraguá",
		"endereco" : "Rua Dr. Felipe Pinel, 12 - Pirituba",
		"telefone" : "3971-2620"
	},
	{
		"zona" : "249 - Santana",
		"suprefeitura" : "Santana Tucuruvi",
		"endereco" : "Av. Tucuruvi, 808",
		"telefone" : "2987-3844"
	},
	{
		"zona" : "246 - Santo Amaro",
		"suprefeitura" : "Santo Amaro",
		"endereco" : "Praça Floriano Peixoto, 54",
		"telefone" : "3396-6100"
	},
	{
		"zona" : "258 - Indianópolis",
		"suprefeitura" : "Santo Amaro",
		"endereco" : "Praça Floriano Peixoto, 54",
		"telefone" : "3396-6100"
	},
	{
		"zona" : "375 - São Mateus",
		"suprefeitura" : "São Mateus",
		"endereco" : "Av. Ragueb Chohfi, 1400",
		"telefone" : "3397-1100"
	},
	{
		"zona" : "247 - São Miguel",
		"suprefeitura" : "São Miguel",
		"endereco" : "Rua Dona Ana Flora Pinheiro de Sousa, 76",
		"telefone" : "2297-9200"
	},
	{
		"zona" : "398 -  Vila Jacuí",
		"suprefeitura" : "São Miguel",
		"endereco" : "Rua Dona Ana Flora Pinheiro de Sousa, 76",
		"telefone" : "2297-9200"
	},
	{
		"zona" : "350 - Sapopemba",
		"suprefeitura" : "Sapopemba",
		"endereco" : "Av. Sapopemba, 9.064",
		"telefone" : "2705-1089"
	},
	{
		"zona" : "421 - Teotônio Vilela",
		"suprefeitura" : "Sapopemba",
		"endereco" : "Av. Sapopemba, 9.064",
		"telefone" : "2705-1089"
	},
	{
		"zona" : "001- Bela Vista",
		"suprefeitura" : "Sé",
		"endereco" : "Rua Alvares Penteado, 49 - Centro",
		"telefone" : "3397-1200"
	},
	{
		"zona" : "002- Perdizes",
		"suprefeitura" : "Sé",
		"endereco" : "Rua Alvares Penteado, 49 - Centro",
		"telefone" : "3397-1200"
	},
	{
		"zona" : "003 - Santa Ifigênia",
		"suprefeitura" : "Sé",
		"endereco" : "Rua Alvares Penteado, 49 - Centro",
		"telefone" : "3397-1200"
	},
	{
		"zona" : "254 - Vila Maria",
		"suprefeitura" : "Vila Maria Vila Guilherme",
		"endereco" : "Rua General Mendes, 111",
		"telefone" : "2967-8100"
	},
	{
		"zona" : "420 - Vila Sabrina",
		"suprefeitura" : "Vila Maria Vila Guilherme",
		"endereco" : "Rua General Mendes, 111",
		"telefone" : "2967-8100"
	},
	{
		"zona" : "005 - Jd. Paulista",
		"suprefeitura" : "Vila Mariana",
		"endereco" : "Rua José de Magalhães, 500 Vila Clementino",
		"telefone" : "3397-4100"
	},
	{
		"zona" : "006 - Vila Mariana",
		"suprefeitura" : "Vila Mariana",
		"endereco" : "Rua José de Magalhães, 500 Vila Clementino",
		"telefone" : "3397-4100"
	},
	{
		"zona" : "259 - Saúde",
		"suprefeitura" : "Vila Mariana",
		"endereco" : "Rua José de Magalhães, 500 Vila Clementino",
		"telefone" : "3397-4100"
	},
	{
		"zona" : "257 - Vila Prudente",
		"suprefeitura" : "Vila Prudente",
		"endereco" : "Av. Do Oratório, 172",
		"telefone" : "3397-0800"
	}
]
  return {
    props: {
      data,
    },  
  }
}
export default function Home(props) {

  const [data, setData] = useState(props.data)
  const [search, setSearch] = useState('')
  const [searchZona, setSearchZona] = useState('')
  const [filteredData, setFilteredData] = useState(data)
  const [sort, setSort] = useState('suprefeitura')
  const [sortDirection, setSortDirection] = useState('asc')
  const dataprops = props.data
 
  useEffect(() => {
    setFilteredData(
      data.filter((item) => {
        return item.suprefeitura.toLowerCase().includes(search.toLowerCase())
      })
    )
  }, [search, data])

  useEffect(() => {
    setFilteredData(
      data.filter((item) => {
        return item.zona.toLowerCase().includes(searchZona.toLowerCase())
      })
    )
  }, [searchZona, data])

  useEffect(() => {
    const sortedData = filteredData.sort((a, b) => {
      if (a.suprefeitura > b.suprefeitura) {
        return 1
      } else {
        return -1
      }
    })
    if (sortDirection === 'desc') {
      sortedData.reverse()
    }
    setFilteredData(sortedData)
  }, [sort, sortDirection, filteredData])

  
  return (
    <Layout>
      <div className='w-full md:w-4/5 h-full p-2'>
        <h2 className='text-lg md:text-2xl font-semibold text-sky-800'>Lista de Zonas Eleitorais</h2>
        <div className='w-full flex flex-col p-2'>
			<div className='relative w-full flex flex-col md:flex-row justify-start items-center gap-4 mb-4'>
				<div className='w-full h-32 md:h-auto flex flex-col justify-between border rounded border-sky-800 bg-sky-600/10 overflow-y-scroll md:overflow-auto p-2 pb-8 md:pb-2'>
					<p>
						O Eleitor da Cidade de São Paulo pode votar em qualquer Subprefeitura, mas pode pesquisar pelo local mais próximo digitando o número de sua Zona Eleitoral que consta em seu Título de Eleitor, sendo o resultado o endereço da Subprefeitura. A busca também pode ser feita pela Subprefeitura.
						<br /><br />
						Serão admitidos exclusivamente Eleitores com Título de eleitor da Cidade de São Paulo, sendo necessário apresentar o Título de Eleito ou e-Título ou Comprovante de votação, que contenha o número do Título e Zona Eleitoral, acompanhado de documento de identidade oficial com foto.
					</p>
					<div className='absolute left-0 right-0 bottom-0 w-full bg-sky-600/90 text-center rounded-b md:hidden'>
						<p className='text-white'>Arraste para ler mais</p>
					</div>
				</div>
			</div>
          <div className='w-full flex flex-col md:flex-row justify-start items-center gap-4 mb-4'>

			

            <div className='w-full flex flex-col justify-between'>
              <label htmlFor='filterZona' className='text-sm font-semibold text-sky-800'>Pesquisar por Zona Eleitoral</label>
              <input id='filterZona' className='w-full border border-sky-600 rounded-md' type="text" value={searchZona} onChange={
				(e) => {
				  setSearchZona(e.target.value)
				}
			  } />
            </div>

            <div className='w-full flex flex-col justify-between'>
              <label htmlFor='filterSub' className='text-sm font-semibold text-sky-800'>Pesquisar por Subprefeitura</label>
              <input id='filterSub' className='w-full border border-sky-600 rounded-md' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>

			<div className='w-full flex flex-col justify-between'>
              <button className='w-full md:w-1/3 text-gray-50 p-1 mt-5 bg-gray-600 rounded-md' onClick={() => {
				setSort('suprefeitura')
				setSearch('')
				setSearchZona('')
				}}>Limpar</button>
            </div>
          </div>
      </div>
      <div className='w-full h-full bg-gray-200 rounded-md p-2 my-4'>
        <div className='w-full flex flex-col md:flex-row font-semibold text-gray-50 bg-gray-900 rounded-md p-2'>
          <div className='w-12/12 md:w-3/12 px-1'><span>Zona</span></div>
          <div className='w-12/12 md:w-4/12 px-1'><span>Suprefeitura</span></div>
          <div className='w-12/12 md:w-5/12 px-1'><span>Endereço</span></div>
		  <div className='w-12/12 md:w-1/12 px-1'><span>Telefone</span></div>
        </div>

        <div className='w-full flex flex-col text-black'>
          {filteredData.map((item) => (
            <div className='w-full flex flex-col md:flex-row bg-sky-400/25 my-1 rounded-md p-2 md:p-1' key={item.zona}>
              <div className='w-12/12 md:w-3/12 px-1 font-medium'><span>{item.zona}</span></div>
              <div className='w-12/12 md:w-4/12 px-1'><span>{item.suprefeitura}</span></div>
              <div className='w-12/12 md:w-5/12 px-1'><span>{item.endereco}</span></div>
			  <div className='w-12/12 md:w-1/12 px-1'><span>{item.telefone}</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
      
    </Layout>
  )
}
