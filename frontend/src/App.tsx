import { useState } from "react";

interface Instruction {
  id: number;
  text: string;
}

export default function App() {
  const [instructions, setInstructions] = useState<Instruction[]>([]);
  const [newInstruction, setNewInstruction] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newInstruction.trim()) {
      const newInstructionObj: Instruction = {
        id: Date.now(),
        text: newInstruction,
      };
      setInstructions([...instructions, newInstructionObj]);
      setNewInstruction("");
    }
  };

  const handleDelete = (id: number) => {
    setInstructions(instructions.filter((instruction) => instruction.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left Side (30%) - Image */}
      <div className="w-1/3 bg-gray-200 flex items-center justify-center">
        <img
          src="https://placehold.co/600x400" // Replace with your image URL
          alt="Placeholder"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side (70%) - Form and Instructions */}
      <div className="w-2/3 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-center mb-8">AI Agent Manager</h1>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="mb-8">
            <textarea
              value={newInstruction}
              onChange={(e) => setNewInstruction(e.target.value)}
              placeholder="Enter your instruction (e.g., 'Farm as many magic carrots as possible in the next 24 hours')"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Instruction
            </button>
          </form>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
            {instructions.length === 0 ? (
              <p className="text-gray-500">No instructions submitted yet.</p>
            ) : (
              <ul>
                {instructions.map((instruction) => (
                  <li
                    key={instruction.id}
                    className="p-4 mb-4 bg-white border border-gray-300 rounded-lg shadow-sm flex justify-between items-center"
                  >
                    <span>{instruction.text}</span>
                    <button
                      onClick={() => handleDelete(instruction.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
