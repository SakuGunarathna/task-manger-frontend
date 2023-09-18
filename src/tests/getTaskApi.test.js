import { render } from "@testing-library/react";
import { getTasksByStatus } from "../apis/task-api";

jest.mock("../apis/task-api", () => ({
  getTasksByStatus: jest.fn(() => Promise.resolve({ data: 1 })),
}));

describe("getTasks", () => {
  it("should fetch tasks successfully", async () => {
    const mockData = {
      data: [
        { id: 1, title: "Task 1" },
        { id: 2, title: "Task 2" },
      ],
    };

    getTasksByStatus.mockResolvedValue({ data: mockData });
    const result = await getTasksByStatus();

    expect(result).toEqual(mockData);
  });
});
