

export default function Total(props){

        const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
  )
  return Total;
}