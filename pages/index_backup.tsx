import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import BasicInfo from '../components/BasicInfo'
import Hero from '../components/Hero'
import Layout from '../components/Layout/Layout'
import axios from 'axios'

export async function getServerSideProps(context) {

  const data = [
	{
		"zona":"1",
		"suprefeitura":"ARICANDUVA / VILA FORMOSA",
		"endereco":"Rua Atucuri, 699 – CEP 03411-000",
		"laglong":""
	},
	{
		"zona":"2",
		"suprefeitura":"ARICANDUVA / VILA FORMOSA",
		"endereco":"Rua Atucuri, 699 – CEP 03411-000",
		"laglong":""
	},
	{
		"zona":"3",
		"suprefeitura":"BUTANTÃ",
		"endereco":"Rua Ulpiano da Costa Manso, 201 – CEP 05538-000",
		"laglong":""
	},
	{
		"zona":"4",
		"suprefeitura":"BUTANTÃ",
		"endereco":"Rua Ulpiano da Costa Manso, 201 – CEP 05538-000",
		"laglong":""
	},
	{
		"zona":"5",
		"suprefeitura":"CAMPO LIMPO",
		"endereco":"Rua Nossa Senhora do Bom Conselho, 59 – CEP 05763-470",
		"laglong":""
	},
	{
		"zona":"6",
		"suprefeitura":"CAMPO LIMPO",
		"endereco":"Rua Nossa Senhora do Bom Conselho, 59 – CEP 05763-470",
		"laglong":""
	},
	{
		"zona":"20",
		"suprefeitura":"CAPELA DO SOCORRO",
		"endereco":"Rua Cassiano dos Santos, 499 – CEP 04827-000",
		"laglong":""
	},
	{
		"zona":"246",
		"suprefeitura":"CAPELA DO SOCORRO",
		"endereco":"Rua Cassiano dos Santos, 499 – CEP 04827-000",
		"laglong":""
	},
	{
		"zona":"247",
		"suprefeitura":"CASA VERDE",
		"endereco":"Avenida Ordem e Progresso, 1001 – CEP 02518-130",
		"laglong":""
	},
	{
		"zona":"248",
		"suprefeitura":"CASA VERDE",
		"endereco":"Avenida Ordem e Progresso, 1001 – CEP 02518-130",
		"laglong":""
	},
	{
		"zona":"249",
		"suprefeitura":"CIDADE ADEMAR",
		"endereco":"Avenida Yervant Kissajikain, 416 – CEP 04657-000",
		"laglong":""
	},
	{
		"zona":"250",
		"suprefeitura":"CIDADE ADEMAR",
		"endereco":"Avenida Yervant Kissajikain, 416 – CEP 04657-000",
		"laglong":""
	},
	{
		"zona":"251",
		"suprefeitura":"CIDADE TIRADENTES",
		"endereco":"Rua Juá Mirim, s/n – CEP: 08490-800",
		"laglong":""
	},
	{
		"zona":"252",
		"suprefeitura":"CIDADE TIRADENTES",
		"endereco":"Rua Juá Mirim, s/n – CEP: 08490-800",
		"laglong":""
	},
	{
		"zona":"253",
		"suprefeitura":"ERMELINO MATARAZZO",
		"endereco":"Avenida São Miguel, 5550 – CEP 03871-100",
		"laglong":""
	},
	{
		"zona":"254",
		"suprefeitura":"ERMELINO MATARAZZO",
		"endereco":"Avenida São Miguel, 5550 – CEP 03871-100",
		"laglong":""
	},
	{
		"zona":"255",
		"suprefeitura":"FREGUESIA DO Ó",
		"endereco":"Avenida João Marcelino Branco, 95 – CEP 02610-000",
		"laglong":""
	},
	{
		"zona":"256",
		"suprefeitura":"FREGUESIA DO Ó",
		"endereco":"Avenida João Marcelino Branco, 95 – CEP 02610-000",
		"laglong":""
	},
	{
		"zona":"257",
		"suprefeitura":"GUAIANASES",
		"endereco":"Estrada Itaquera-Guaianases, 2565 – CEP 08420-000",
		"laglong":""
	},
	{
		"zona":"258",
		"suprefeitura":"GUAIANASES",
		"endereco":"Estrada Itaquera-Guaianases, 2565 – CEP 08420-000",
		"laglong":""
	},
	{
		"zona":"259",
		"suprefeitura":"IPIRANGA",
		"endereco":"Rua Lino Coutinho, 444 – CEP 04207 000",
		"laglong":""
	},
	{
		"zona":"260",
		"suprefeitura":"IPIRANGA",
		"endereco":"Rua Lino Coutinho, 444 – CEP 04207 000",
		"laglong":""
	},
	{
		"zona":"280",
		"suprefeitura":"ITAIM PAULISTA",
		"endereco":"Avenida Marechal Tito 3012, CEP: 08115-000",
		"laglong":""
	},
	{
		"zona":"320",
		"suprefeitura":"ITAIM PAULISTA",
		"endereco":"Avenida Marechal Tito 3012, CEP: 08115-000",
		"laglong":""
	},
	{
		"zona":"325",
		"suprefeitura":"ITAQUERA",
		"endereco":"Rua Augusto Carlos Bauman, 851 CEP: 08210-590",
		"laglong":""
	},
	{
		"zona":"326",
		"suprefeitura":"ITAQUERA",
		"endereco":"Rua Augusto Carlos Bauman, 851 CEP: 08210-590",
		"laglong":""
	},
	{
		"zona":"327",
		"suprefeitura":"JABAQUARA",
		"endereco":"Avenida Engenheiro Armando de Arruda Pereira, 2314 – CEP 04309-011",
		"laglong":""
	},
	{
		"zona":"328",
		"suprefeitura":"JABAQUARA",
		"endereco":"Avenida Engenheiro Armando de Arruda Pereira, 2314 – CEP 04309-011",
		"laglong":""
	},
	{
		"zona":"346",
		"suprefeitura":"JAÇANÃ / TREMEMBÉ",
		"endereco":"Avenida Luis Stamatis, 300 – CEP 02260-000",
		"laglong":""
	},
	{
		"zona":"347",
		"suprefeitura":"JAÇANÃ / TREMEMBÉ",
		"endereco":"Avenida Luis Stamatis, 300 – CEP 02260-000",
		"laglong":""
	},
	{
		"zona":"348",
		"suprefeitura":"LAPA",
		"endereco":"Rua Guaicurus, 1000 – CEP 05033-002",
		"laglong":""
	},
	{
		"zona":"349",
		"suprefeitura":"LAPA",
		"endereco":"Rua Guaicurus, 1000 – CEP 05033-002",
		"laglong":""
	},
	{
		"zona":"350",
		"suprefeitura":"M'BOI MIRIM",
		"endereco":"Avenida Guarapiranga, 1265 – CEP 04902-903",
		"laglong":""
	},
	{
		"zona":"351",
		"suprefeitura":"M'BOI MIRIM",
		"endereco":"Avenida Guarapiranga, 1265 – CEP 04902-903",
		"laglong":""
	},
	{
		"zona":"352",
		"suprefeitura":"MOOCA",
		"endereco":"Rua Taquari, 549 – CEP 03166-000",
		"laglong":""
	},
	{
		"zona":"353",
		"suprefeitura":"MOOCA",
		"endereco":"Rua Taquari, 549 – CEP 03166-000",
		"laglong":""
	},
	{
		"zona":"371",
		"suprefeitura":"PARELHEIROS",
		"endereco":"Estrada Ecoturística de Parelheiros, 5252 – CEP 04825-000",
		"laglong":""
	},
	{
		"zona":"372",
		"suprefeitura":"PARELHEIROS",
		"endereco":"Estrada Ecoturística de Parelheiros, 5252 – CEP 04825-000",
		"laglong":""
	},
	{
		"zona":"373",
		"suprefeitura":"PENHA",
		"endereco":"Rua Candapuí, 492 – CEP 03621-000",
		"laglong":""
	},
	{
		"zona":"374",
		"suprefeitura":"PENHA",
		"endereco":"Rua Candapuí, 492 – CEP 03621-000",
		"laglong":""
	},
	{
		"zona":"375",
		"suprefeitura":"PERUS",
		"endereco":"Rua Ylídio Figueiredo, 349 – CEP 05204-020",
		"laglong":""
	},
	{
		"zona":"376",
		"suprefeitura":"PERUS",
		"endereco":"Rua Ylídio Figueiredo, 349 – CEP 05204-020",
		"laglong":""
	},
	{
		"zona":"381",
		"suprefeitura":"PINHEIROS",
		"endereco":"Av. Nações Unidas, 7123 – CEP 05425-070",
		"laglong":""
	},
	{
		"zona":"389",
		"suprefeitura":"PINHEIROS",
		"endereco":"Av. Nações Unidas, 7123 – CEP 05425-070",
		"laglong":""
	},
	{
		"zona":"390",
		"suprefeitura":"PIRITUBA",
		"endereco":"Rua Luis Carneiro, 193 / 197  – CEP 02936-110",
		"laglong":""
	},
	{
		"zona":"392",
		"suprefeitura":"PIRITUBA",
		"endereco":"Rua Luis Carneiro, 193 / 197  – CEP 02936-110",
		"laglong":""
	},
	{
		"zona":"397",
		"suprefeitura":"SANTANA / TUCURUVI",
		"endereco":"Avenida Tucuruvi, 808 – CEP 02304-002",
		"laglong":""
	},
	{
		"zona":"398",
		"suprefeitura":"SANTANA / TUCURUVI",
		"endereco":"Avenida Tucuruvi, 808 – CEP 02304-002",
		"laglong":""
	},
	{
		"zona":"403",
		"suprefeitura":"SANTO AMARO",
		"endereco":"Praça Floriano Peixoto, 54 – CEP 04751-030",
		"laglong":""
	},
	{
		"zona":"404",
		"suprefeitura":"SANTO AMARO",
		"endereco":"Praça Floriano Peixoto, 54 – CEP 04751-030",
		"laglong":""
	},
	{
		"zona":"405",
		"suprefeitura":"SÃO MATEUS",
		"endereco":"Rua Ragueb Chohfi, 1.400 – CEP 08375-000",
		"laglong":""
	},
	{
		"zona":"408",
		"suprefeitura":"SÃO MIGUEL",
		"endereco":"Rua Ana Flora Pinheiro de Sousa, 76 – CEP 08060-150",
		"laglong":""
	},
	{
		"zona":"413",
		"suprefeitura":"SAPOPEMBA",
		"endereco":"Avenida Sapopemba, 9.064 – CEP 03988-010",
		"laglong":""
	},
	{
		"zona":"417",
		"suprefeitura":"SÉ",
		"endereco":"Rua Álvares Penteado, 49",
		"laglong":""
	},
	{
		"zona":"418",
		"suprefeitura":"VILA MARIA / VILA GUILHERME",
		"endereco":"Rua General Mendes, 111 – CEP 02127-020",
		"laglong":""
	},
	{
		"zona":"420",
		"suprefeitura":"VILA MARIANA",
		"endereco":"Rua José de Magalhães, 500 – CEP 04026-090",
		"laglong":""
	},
	{
		"zona":"421",
		"suprefeitura":"VILA PRUDENTE",
		"endereco":"Avenida do Oratório, 172 – CEP 03220-000",
		"laglong":""
	},
	{
		"zona":"422",
		"suprefeitura":"VILA PRUDENTE",
		"endereco":"Avenida do Oratório, 172 – CEP 03220-000",
		"laglong":""
	}
]

  return {
    props: {
      data,
    },  
  }
}
export default function Home_Backup(props) {

  const [data, setData] = useState(props.data)
  const [search, setSearch] = useState('')
  const [searchZona, setSearchZona] = useState('')
  const [filteredData, setFilteredData] = useState(data)
  const [sort, setSort] = useState('')
  const [sortDirection, setSortDirection] = useState('asc')
  const dataprops = props.data

  const router = useRouter()
 
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
      <div className='w-4/5 h-full p-2'>
        <h2 className='text-2xl font-semibold text-sky-800'>Lista de Zonas Eleitorais</h2>
        <div className='w-full flex flex-col p-2'>
          <div className='w-full flex flex-col md:flex-row justify-start items-center gap-4 mb-4'>
            <div className='flex flex-col justify-between'>
              <label htmlFor='filterZona' className='text-sm font-semibold text-sky-800'>Pesquisar por Zona Eleitoral</label>
              <input id='filterZona' className='border border-sky-600 rounded-md' type="text" value={searchZona} onChange={(e) => setSearchZona(e.target.value)} />
            </div>
            <div className='flex flex-col justify-between'>
              <label htmlFor='filterSub' className='text-sm font-semibold text-sky-800'>Pesquisar por Subprefeitura</label>
              <input id='filterSub' className='border border-sky-600 rounded-md' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>

            <div className='flex flex-col justify-between'>
              <label htmlFor='sortSub' className='text-sm font-semibold text-sky-800'>Ordenar por Subprefeitura</label>
              <select id='sortSub' className='border border-sky-600 rounded-md' value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="">-</option>
                <option value="zona">Zona</option>
                <option value="suprefeitura">Suprefeitura</option>
                <option value="endereco">Endereço</option>
              </select>
            </div>
            <div className='flex flex-col justify-between'>
              <label htmlFor='sortDirection' className='w-full text-sm font-semibold text-sky-800'>Ordenar</label>
              <select className='border border-sky-600 rounded-md' id='sortDirection' value={sortDirection} onChange={(e) => setSortDirection(e.target.value)}>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
              </select>
            </div>
          </div>

          <div className='w-full flex flex-col md:flex-row justify-start items-center gap-4'>
            <button className='text-gray-50 p-1 bg-sky-600 rounded-md' onClick={() => {
              const filteredData = data.filter((item) => {
                return item.zona.toLowerCase().includes(search.toLowerCase())
              })

              if (sort === 'zona') {
                filteredData.sort((a, b) => {
                  if (sortDirection === 'asc') {
                    return a.zona - b.zona
                  } else {
                    return b.zona - a.zona
                  }
                })
              }

              if (sort === 'suprefeitura') {
                filteredData.sort((a, b) => {
                  if (sortDirection === 'asc') {
                    return a.suprefeitura.localeCompare(b.suprefeitura)
                  } else {
                    return b.suprefeitura.localeCompare(a.suprefeitura)
                  }
                })
              }

              if (sort === 'endereco') {
                filteredData.sort((a, b) => {
                  if (sortDirection === 'asc') {
                    return a.endereco.localeCompare(b.endereco)
                  } else {
                    return b.endereco.localeCompare(a.endereco)
                  }
                })
              }

              setFilteredData(filteredData)
            }}>Filtrar</button>

            <button className='text-gray-50 p-1 bg-gray-600 rounded-md' onClick={() => {
              setFilteredData(data)
              setSearch('')
              setSort('')
              setSortDirection('asc')
            }}>Limpar</button>
          </div>
          
          
      </div>
      <div className='p-2'>
        <table>
          <thead>
            <tr>
              <th>Zona</th>
              <th>Suprefeitura</th>
              <th>Endereço</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.zona}>
                <td>{item.zona}</td>
                <td>{item.suprefeitura}</td>
                <td>{item.endereco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      
    </Layout>
  )
}
