export const Input = ({ type, id, placeholder, titleChange }) => {
    return (
        <input
          id={id}
          type={type}
          className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
          placeholder={placeholder}
          onChange={titleChange}
        />
    )
  }